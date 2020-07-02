import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProductsCheckouts1593545872725
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'checkouts_products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'product_id',
            type: 'uuid',
          },
          {
            name: 'checkout_id',
            type: 'uuid',
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
            name: 'CheckoutsProducts',
            referencedTableName: 'checkouts',
            referencedColumnNames: ['id'],
            columnNames: ['checkout_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ProductsCheckouts',
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            columnNames: ['product_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('checkouts_products');
  }
}
