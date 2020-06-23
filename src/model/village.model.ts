import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("villages")
export class Village {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  parent_id: number;

  @Column({nullable: true})
  post_code: string;

  @Column({nullable: true})
  name: string;

  @Column({nullable: true})
  khmer_name: string;

  @Column({nullable: true})
  abbr: string;


  @Column({nullable: true})
  chart_id: string;

  @Column({nullable: true})
  east: string;

  @Column({nullable: true})
  west: string;

  @Column({nullable: true})
  north: string;

  @Column({nullable: true})
  south: string;

  @Column({ default: 1 })
  status: number;
}