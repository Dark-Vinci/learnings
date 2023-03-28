@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number


    @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
        cascade: true //save one, the related entity get saved too [PhotoMetadata]
    })
    metadata: Relation<PhotoMetadata> //for ESM module

    constructor(
        lastName: string,
        firstName: string,
        age: number,
    ) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

________________________________________________________________________________________________________________________________
Query builder example

const photos = await AppDataSource.getRepository(Photo)
    .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    .innerJoinAndSelect("photo.metadata", "metadata")
    .leftJoinAndSelect("photo.albums", "album")
    .where("photo.isPublished = true")
    .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    .orderBy("photo.id", "DESC")
    .skip(5)
    .take(10)
    .setParameters({ photoName: "My", bearName: "Mishka" })
    .getMany()

________________________________________________________________________________________________________________________________

Datasource parameters
    migrationsTableName: 'migrations', //default

________________________________________________________________________________________________________________________________
Test cases:
    use SQLITE

________________________________________________________________________________________________________________________________

@VersionColumn
managing versions

@DeleteDateColumn

@UpdateDateColumn

@CreateDateColumn

________________________________________________________________________________________________________________________________

const thing = new Thing()
thing.point = {
    type: "Point",
    coordinates: [116.443987, 39.920843],
}
thing.linestring = {
    type: "LineString",
    coordinates: [
        [-87.623177, 41.881832],
        [-90.199402, 38.627003],
        [-82.446732, 38.413651],
        [-87.623177, 41.881832],
    ],
}
thing.multiPointWithSRID = {
    type: "MultiPoint",
    coordinates: [
        [100.0, 0.0],
        [101.0, 1.0],
    ],
}

________________________________________________________________________________________________________________________________

@Column("varchar", { length: 200 })
@Column({ type: "int", width: 200 })

@Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST,
})

@Column({
    type: "set",
    enum: UserRole,
    default: [UserRole.GHOST, UserRole.EDITOR],
})
roles: UserRole[]

@Column("simple-array")
    names: string[]

@Column("simple-json")
profile: { name: string; nickname: string };

@Column({
    type: "boolean",
    name: "boolean",
    length: 30 //varchar (30)
    width: 3 //mysql integer type
    onUpdate: string //mysql only
    nullable: boolean
    update: boolean
    insert: boolean
    select: boolean
    default: type
    unique: boolean
    comment: 'string'
    precision: number
    zerofill: boolean //mysql
    enum
    enumName: string 
})

________________________________________________________________________________________________________________________________
export abstract class Content {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string
}
@Entity()
export class Photo extends Content {
    @Column()
    size: string
}

@Entity()
export class Question extends Content {
    @Column()
    answersCount: number
}

@Entity()
export class Post extends Content {
    @Column()
    viewCount: number
}
________________________________________________________________________________________________________________________________

// Adjacency list

@Entity()
@Tree("closure-table")
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @TreeChildren()
    children: Category[]

    @TreeParent()
    parent: Category

    @TreeLevelColumn()
    level: number
}

@Entity()
@Tree("materialized-path")
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @TreeChildren()
    children: Category[]

    @TreeParent()
    parent: Category
}

Category.findTrees()
.findRoots()

.findDescendants(parentCategory)

.findDescendantsTree(
    parentCategory,
    { depth: 2 },
)

.countDescendants(parentCategory)

.findAncestors(childCategory)

.findAncestorsTree(childCategory)

.countAncestors(childCategory)
________________________________________________________________________________________________________________________________

Column embedding

export class Name {
    @Column()
    first: string

    @Column()
    last: string
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column(() => Name)
    name: Name

    @Column()
    isActive: boolean
}

________________________________________________________________________________________________________________________________

