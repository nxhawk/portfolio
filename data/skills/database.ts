import type { ISkill } from ".";

const database: ISkill[] = [
  {
    alt: "mysql",
    img: "/skills/database/mysql-icon.svg",
    official: "/skills/database/official/mysql-icon-official.svg",
    description:
      "MySQL is the world’s most popular open source database. According to DB-Engines, MySQL ranks as the second-most-popular database, behind Oracle Database. MySQL powers many of the most accessed applications, including Facebook, Twitter, Netflix, Uber, Airbnb, Shopify, and Booking.com.",
  },
  {
    alt: "postgresql",
    img: "/skills/database/postgresql-icon.svg",
    official: "/skills/database/official/postgresql-icon-official.svg",
    description:
      "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley and has more than 35 years of active development on the core platform.",
  },
  {
    alt: "mongodb",
    img: "/skills/database/mongodb-icon.svg",
    official: "/skills/database/official/mongodb-icon-official.svg",
    description:
      "MongoDB is a document database designed for ease of application development and scaling. You can run MongoDB in the following environments:\nMongoDB Atlas: The fully managed service for MongoDB deployments in the cloud.\nMongoDB Enterprise: The subscription-based, self-managed version of MongoDB.\nMongoDB Community: The source-available, free-to-use, and self-managed version of MongoDB",
  },
  {
    alt: "SQLite",
    img: "/skills/database/sqlite-icon.svg",
    official: "/skills/database/official/sqlite-icon-official.svg",
    description:
      "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day",
  },
  {
    alt: "redis",
    img: "/skills/database/redis-icon.svg",
    official: "/skills/database/official/redis-icon-official.svg",
    description:
      "Redis (REmote DIctionary Server) is an open source, in-memory, NoSQL key/value store that is used primarily as an application cache or quick-response database. Redis stores data in memory, rather than on a disk or solid-state drive (SSD), which helps deliver unparalleled speed, reliability, and performance.",
  },
];

export default database;
