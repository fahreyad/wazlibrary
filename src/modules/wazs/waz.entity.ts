import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Iwaz } from './iwaz.interface';
@Entity()
export class Waz implements Iwaz {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'date' })
  release_date: Date;
  @Column({ type: 'date' })
  duration: Date;
  @Column({ type: 'timestamp' })
  created_at: Date;
  @Column({ type: 'timestamp' })
  updated_at: Date;
}
