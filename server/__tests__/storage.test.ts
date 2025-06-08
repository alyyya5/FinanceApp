import { storage } from '../storage';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { users, transactions, categories } from '@shared/schema';
import { describe, test, expect, vi, beforeEach } from 'vitest';

vi.mock('../db', () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    insert: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    returning: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    execute: vi.fn(),
  },
}));

describe('DatabaseStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('User operations', () => {
    test('getUser должен возвращать пользователя', async () => {
      const mockUser = { id: 1, email: 'test@test.com' };
      vi.mocked(db.select).mockResolvedValue([mockUser]);
      
      const result = await storage.getUser(1);
      expect(result).toEqual(mockUser);
      expect(db.select).toHaveBeenCalledWith();
      expect(db.from).toHaveBeenCalledWith(users);
      expect(db.where).toHaveBeenCalledWith(eq(users.id, 1));
    });

    test('createUser должен создавать пользователя', async () => {
      const newUser = { 
        email: 'new@user.com', 
        password: 'hash', 
        firstName: 'John', 
        lastName: 'Doe' 
      };
      vi.mocked(db.insert).mockReturnThis();
      vi.mocked(db.values).mockReturnThis();
      vi.mocked(db.returning).mockResolvedValue([{ ...newUser, id: 1 }]);
      
      const result = await storage.createUser(newUser);
      expect(result.id).toBe(1);
      expect(db.insert).toHaveBeenCalledWith(users);
    });
  });

  describe('Transaction operations', () => {
    test('getUserTransactions должен возвращать транзакции', async () => {
      const mockTransactions = [
        { id: 1, amount: '100', type: 'income' },
        { id: 2, amount: '50', type: 'expense' }
      ];
      vi.mocked(db.select).mockResolvedValue(mockTransactions);
      
      const result = await storage.getUserTransactions(1);
      expect(result).toEqual(mockTransactions);
      expect(db.where).toHaveBeenCalledWith(eq(transactions.userId, 1));
    });

    test('createTransaction должен создавать транзакцию', async () => {
      const newTransaction = {
        userId: 1,
        type: 'expense',
        amount: 50,
        category: 'food',
        date: new Date(),
        ecoImpact: 7.5
      };
      vi.mocked(db.insert).mockReturnThis();
      vi.mocked(db.returning).mockResolvedValue([{ ...newTransaction, id: 1 }]);
      
      const result = await storage.createTransaction(newTransaction);
      expect(result.id).toBe(1);
    });
  });

  describe('Category operations', () => {
    test('getUserCategories должен возвращать категории', async () => {
      const mockCategories = [
        { id: 1, name: 'Food', type: 'expense' },
        { id: 2, name: 'Salary', type: 'income' }
      ];
      vi.mocked(db.select).mockResolvedValue(mockCategories);
      
      const result = await storage.getUserCategories(1);
      expect(result).toEqual(mockCategories);
    });

    test('deleteCategory должен удалять категорию', async () => {
      await storage.deleteCategory(1);
      expect(db.delete).toHaveBeenCalledWith(categories);
      expect(db.where).toHaveBeenCalledWith(eq(categories.id, 1));
    });
  });

  describe('Analytics', () => {
    test('getDashboardStats должен считать статистику', async () => {
      const mockTransactions = [
        { type: 'income', amount: '100', ecoImpact: '10' },
        { type: 'expense', amount: '50', ecoImpact: '5' }
      ];
      vi.mocked(db.select).mockResolvedValue(mockTransactions);
      
      const result = await storage.getDashboardStats(1);
      expect(result.totalBalance).toBe(50);
      expect(result.ecoRating).toBe('A+');
    });
  });
});
