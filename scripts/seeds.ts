import { config } from 'dotenv';
import { eachDayOfInterval, format, subDays } from 'date-fns';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { categories, accounts, transactions } from '@/db/schema';
import { covertAmountToMiliunits } from '@/lib/utils';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const SEED_USER_ID = process.env.SEED_USER_ID! // change this to clerk user currently logged in
const SEED_CATEGORIES = [
  { id: 'category_1', name: 'Food', userId: SEED_USER_ID, plaidId: null },
  { id: 'category_2', name: 'Grocery', userId: SEED_USER_ID, plaidId: null },
  {
    id: 'category_3',
    name: 'Entertainment',
    userId: SEED_USER_ID,
    plaidId: null,
  },
  { id: 'category_4', name: 'Clothing', userId: SEED_USER_ID, plaidId: null },
  { id: 'category_5', name: 'Housing', userId: SEED_USER_ID, plaidId: null },
  {
    id: 'category_6',
    name: 'Transportation',
    userId: SEED_USER_ID,
    plaidId: null,
  },
  { id: 'category_7', name: 'Utilities', userId: SEED_USER_ID, plaidId: null },
  { id: 'category_8', name: 'Insurance', userId: SEED_USER_ID, plaidId: null },
];

const SEED_ACCOUNTS = [
  { id: 'account_1', name: 'Checking', userId: SEED_USER_ID, plaidId: null },
  { id: 'account_2', name: 'Savings', userId: SEED_USER_ID, plaidId: null },
];

const defaultTo = new Date();
const defaultFrom = subDays(defaultTo, 90);

const SEED_TRANSACTIONS: (typeof transactions.$inferSelect)[] = [];

const generateRandomAmount = (category: typeof categories.$inferInsert) => {
  switch (category.name) {
    case 'Food':
      return Math.random() * 300 + 300; // $300 - $600
    case 'Grocery':
      return Math.random() * 300 + 300; // $300 - $600
    case 'Entertainment':
      return Math.random() * 200 + 100; // $100 - $300
    case 'Clothing':
      return Math.random() * 100 + 50; // $50 - $150
    case 'Housing':
      return Math.random() * 1500 + 1000; // $1000 - $2500
    case 'Transportation':
      return Math.random() * 500 + 300; // $300 - $800
    case 'Utilities':
      return Math.random() * 200 + 200; // $200 - $400
    case 'Insurance':
      return Math.random() * 300 + 300; // $300 - $600
    default:
      return Math.random() * 100 + 50; // Default case: $50 - $150
  }
};


const generateTransactionsForDay = (day: Date) => {
  const numTransactions = Math.floor(Math.random() * 4) + 1; // 1-4
  for (let i = 0; i < numTransactions; i++) {
    const account = SEED_ACCOUNTS[Math.floor(Math.random() * SEED_ACCOUNTS.length)];
    const category =
      SEED_CATEGORIES[Math.floor(Math.random() * SEED_CATEGORIES.length)];
    const isExpense = Math.random() > 0.5; // 50% chance of being an expense
    const amount = generateRandomAmount(category);
    const formattedAmount = covertAmountToMiliunits(
      isExpense ? -amount : amount
    ); // make it negative if it's an expense

    SEED_TRANSACTIONS.push({
      id: `transaction_${format(day, 'yyyy-MM-dd')}_${i}`,
      accountId: account.id,
      categoryId: category.id,
      date: day,
      amount: formattedAmount,
      payee: 'Merchant',
      notes: 'Random Transaction',
    });
  }
};

const generateTransactions = () => {
    const days = eachDayOfInterval({
      start: defaultFrom,
      end: defaultTo,
    });
    days.forEach(day => generateTransactionsForDay(day));
};

generateTransactions();

const main = async () => {
    try {
        await db.delete(transactions).execute();
        await db.delete(accounts).execute();
        await db.delete(categories).execute();
        
        await db.insert(categories).values(SEED_CATEGORIES).execute();
        await db.insert(accounts).values(SEED_ACCOUNTS).execute();
        await db.insert(transactions).values(SEED_TRANSACTIONS).execute();
    } catch (error) {
        console.error("Error during seeding: ", error);
        process.exit(1);
    }
};

main();