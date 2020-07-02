import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Product from './Product';

@Entity('checkouts')
class Checkout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  amount: number;

  @Column('decimal')
  fee: number;

  @ManyToMany(() => Product, { cascade: true })
  @JoinTable({
    name: 'checkouts_products',
    joinColumn: { name: 'checkout_id' },
    inverseJoinColumn: { name: 'product_id' },
  })
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Checkout;
