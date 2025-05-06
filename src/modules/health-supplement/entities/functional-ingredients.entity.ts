import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity.ts';

@Entity({ name: 'functional_ingredients' })
export class FunctionalIngredientEntity extends AbstractEntity {
  @Column({ type: 'varchar', comment: '성분명' })
  name!: string;

  @Column({ type: 'text', comment: '기능성 설명' })
  functionality!: string;

  @Column({ type: 'float', nullable: true, comment: '일일 최소 섭취량' })
  dailyIntakeMin!: number | null;

  @Column({ type: 'float', nullable: true, comment: '일일 최대 섭취량' })
  dailyIntakeMax!: number | null;

  @Column({ type: 'text', nullable: true, comment: '섭취 주의사항' })
  caution!: string | null;
}
