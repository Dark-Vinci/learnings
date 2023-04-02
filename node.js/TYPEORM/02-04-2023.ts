// ADVANCED TOPICS

// transactions
await queryRunner.startTransaction()

try {
    // execute some operations on this transaction:
    await queryRunner.manager.save(user1)
    await queryRunner.manager.save(user2)
    await queryRunner.manager.save(photos)

    // commit transaction now:
    await queryRunner.commitTransaction()
} catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction()
} finally {
    // you need to release query runner which is manually created:
    await queryRunner.release()
}


// INDEXING
// Unique index and Unique constraint(unique) are almost the same, 
// -> unique index can speed up queries but constraint cant
// -> Both enforces uniqueness but in different ways
// -> Index is a datastructure, uniqueness is just a rule to
@Entity()
@Index(["firstName", "lastName"])
@Index(["firstName", "middleName", "lastName"], { unique: true })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Column()
    firstName: string

    @Column()
    @Index("index-name")
    lastName: string

    @Index({ unique: true })
    @Column()
    age: string
}

// ENTITY LISTENERS
@AfterLoad
@BeforeInsert
@AfterInsert
@BeforeUpdate
@AfterUpdate
@BeforeRemove
@AfterRemove
@BeforeSoftRemove
@AfterSoftRemove
@BeforeRecover
@AfterRecover

// example of usage
@BeforeInsert()
hashPassword(): Promise<string> {
    this.password = 'password'; //hashed password
}

// EVENT SUBSCRIBERS
//& can be used to send push notification, more like event emitters
@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
    listenTo() {
        return Post
    }

    beforeInsert(event: InsertEvent<Post>) {
        console.log(`BEFORE POST INSERTED: `, event.entity)
    }
}

// LOGGING
{
    logging: ["query", "error", "schema", "warn", "info", "log"]
}

default { logging: "all" }

// LOGGER
{
    logger: oneof ["file(ormlog.log)", "advance_console(default)", "simple_console", "debug"],
    logger: new MyCustomLogger()-> Winston,
}

// CLI

// 1) npm install ts-node --save-dev
// 2) "scripts": {
//     ...
//     "typeorm": "typeorm-ts-node-commonjs"
// }

// 3) npm run typeorm migration:run -- -d path-to-datasource-config (run any typeorm command)

commands
1) Create migration new migration file | typeorm migration:create path-to-migrations-dir/migrationName
2) Run Migration | typeorm migration:run -- -d path-to-datasource-config
3) Revert migration | typeorm migration:revert -- -d path-to-datasource-config
4) Show status of migration | typeorm migration:show  -- -d path-to-datasource-config

METHOD 2;

"scripts": {
    "ts-node": "ts-node",
    "typeorm": "node ts-node/register ./node_modules/typeorm/cli.js",
    "typeorm:generate": "npm typeorm migrations:generate -- -n"
}

// run -> npm run typeorm:generate name_of_migration