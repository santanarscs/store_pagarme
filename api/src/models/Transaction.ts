import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Checkout from './Checkout';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  transaction_id: string;

  @Column()
  status: string;

  @Column()
  authorization_code: string;

  @Column()
  brand: string;

  @Column()
  authorized_amount: string;

  @Column()
  tid: string;

  @Column('integer')
  installments: number;

  @OneToOne(() => Checkout, { eager: true })
  @JoinColumn({ name: 'checkout_id' })
  checkout: Checkout;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
