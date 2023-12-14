-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "description" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "userId" VARCHAR(50),
    "userPw" VARCHAR(50),
    "userName" VARCHAR(50),
    "userNickName" VARCHAR(50),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userImgs" (
    "id" SERIAL NOT NULL,
    "imgUrl" VARCHAR(500),
    "useFlag" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "userImgs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "location" VARCHAR(50),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hansics" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "addr" VARCHAR(500),
    "googleStar" VARCHAR(100),
    "userStar" VARCHAR(50),
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "hansic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sicdangImg" (
    "id" SERIAL NOT NULL,
    "imgUrl" VARCHAR(500),
    "useFlag" BOOLEAN NOT NULL DEFAULT true,
    "hansicsId" INTEGER NOT NULL,

    CONSTRAINT "sicdangImg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "useFlag" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "hansicsId" INTEGER NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menuImg" (
    "id" SERIAL NOT NULL,
    "imgUrl" VARCHAR(500),
    "useFlag" BOOLEAN NOT NULL DEFAULT false,
    "menuId" INTEGER NOT NULL,

    CONSTRAINT "menuImg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "review" VARCHAR(1000),
    "star" INTEGER NOT NULL,
    "useFlag" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,
    "hansicsId" INTEGER NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviewImg" (
    "id" SERIAL NOT NULL,
    "imgUrl" VARCHAR(500),
    "reviewId" INTEGER NOT NULL,

    CONSTRAINT "reviewImg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviewComment" (
    "id" SERIAL NOT NULL,
    "comment" VARCHAR(500),
    "reviewId" INTEGER NOT NULL,

    CONSTRAINT "reviewComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userImgs" ADD CONSTRAINT "userImgs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hansics" ADD CONSTRAINT "hansics_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sicdangImg" ADD CONSTRAINT "sicdangImg_hansicsId_fkey" FOREIGN KEY ("hansicsId") REFERENCES "hansics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_hansicsId_fkey" FOREIGN KEY ("hansicsId") REFERENCES "hansics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menuImg" ADD CONSTRAINT "menuImg_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_hansicsId_fkey" FOREIGN KEY ("hansicsId") REFERENCES "hansics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviewImg" ADD CONSTRAINT "reviewImg_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviewComment" ADD CONSTRAINT "reviewComment_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
