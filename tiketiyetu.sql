CREATE TABLE "User" (
  "UserID" int PRIMARY KEY,
  "Username" varchar,
  "Email" varchar,
  "Password" varchar,
  "ProfileInformation" text
);

CREATE TABLE "Event" (
  "EventID" int PRIMARY KEY,
  "Title" varchar,
  "Description" text,
  "Date" datetime,
  "Time" time,
  "Venue" varchar,
  "OrganizerID" int,
  "Category" varchar
);

CREATE TABLE "Ticket" (
  "TicketID" int PRIMARY KEY,
  "EventID" int,
  "Type" varchar,
  "Price" decimal,
  "Quantity" int
);

CREATE TABLE "Cart" (
  "CartID" int PRIMARY KEY,
  "UserID" int
);

CREATE TABLE "CartItem" (
  "CartItemID" int PRIMARY KEY,
  "CartID" int,
  "TicketID" int,
  "Quantity" int
);

CREATE TABLE "Purchase" (
  "PurchaseID" int PRIMARY KEY,
  "UserID" int,
  "PurchaseDate" datetime,
  "TotalAmount" decimal
);

CREATE TABLE "PurchaseItem" (
  "PurchaseItemID" int PRIMARY KEY,
  "PurchaseID" int,
  "TicketID" int,
  "Quantity" int
);

CREATE TABLE "Review" (
  "ReviewID" int PRIMARY KEY,
  "UserID" int,
  "EventID" int,
  "Rating" int,
  "Comment" text
);

ALTER TABLE "Event" ADD FOREIGN KEY ("OrganizerID") REFERENCES "User" ("UserID");

ALTER TABLE "Ticket" ADD FOREIGN KEY ("EventID") REFERENCES "Event" ("EventID");

ALTER TABLE "Cart" ADD FOREIGN KEY ("UserID") REFERENCES "User" ("UserID");

ALTER TABLE "CartItem" ADD FOREIGN KEY ("CartID") REFERENCES "Cart" ("CartID");

ALTER TABLE "CartItem" ADD FOREIGN KEY ("TicketID") REFERENCES "Ticket" ("TicketID");

ALTER TABLE "Purchase" ADD FOREIGN KEY ("UserID") REFERENCES "User" ("UserID");

ALTER TABLE "PurchaseItem" ADD FOREIGN KEY ("PurchaseID") REFERENCES "Purchase" ("PurchaseID");

ALTER TABLE "PurchaseItem" ADD FOREIGN KEY ("TicketID") REFERENCES "Ticket" ("TicketID");

ALTER TABLE "Review" ADD FOREIGN KEY ("UserID") REFERENCES "User" ("UserID");

ALTER TABLE "Review" ADD FOREIGN KEY ("EventID") REFERENCES "Event" ("EventID");
