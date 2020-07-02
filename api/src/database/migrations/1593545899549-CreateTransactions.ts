import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransactions1593545899549
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'checkout_id',
            type: 'uuid',
          },
          {
            name: 'transaction_id',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'authorization_code',
            type: 'varchar',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'authorized_amount',
            type: 'varchar',
          },
          {
            name: 'tid',
            type: 'varchar',
          },
          {
            name: 'installments',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'TransactionCheckouts',
            referencedTableName: 'checkouts',
            referencedColumnNames: ['id'],
            columnNames: ['checkout_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
