/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: client
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthDate` datetime NOT NULL,
  `registrationDate` datetime NOT NULL,
  `ipAddress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` set('lead', 'demo', 'client') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'demo',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: client_image
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `client_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `originalName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_31443f4b985219596e07fcb1861` (`clientId`),
  CONSTRAINT `FK_31443f4b985219596e07fcb1861` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: client
# ------------------------------------------------------------

INSERT INTO
  `client` (
    `id`,
    `firstName`,
    `lastName`,
    `birthDate`,
    `registrationDate`,
    `ipAddress`,
    `status`,
    `email`
  )
VALUES
  (
    1,
    'Misir',
    'Misir',
    '2021-02-02 15:34:13',
    '2021-02-02 15:34:13',
    'asdsadas',
    'demo',
    'aadsad@mail.ru'
  );
INSERT INTO
  `client` (
    `id`,
    `firstName`,
    `lastName`,
    `birthDate`,
    `registrationDate`,
    `ipAddress`,
    `status`,
    `email`
  )
VALUES
  (
    2,
    'doe',
    'john',
    '2021-02-02 16:34:35',
    '2021-02-02 16:34:35',
    'asdsadas',
    'lead',
    'asdaaaa@mail.ru'
  );
INSERT INTO
  `client` (
    `id`,
    `firstName`,
    `lastName`,
    `birthDate`,
    `registrationDate`,
    `ipAddress`,
    `status`,
    `email`
  )
VALUES
  (
    3,
    'doe',
    'asda',
    '2021-02-02 17:06:25',
    '2021-02-02 17:06:25',
    'asdsadas',
    'lead',
    'asdaaaa@mail.ru'
  );
INSERT INTO
  `client` (
    `id`,
    `firstName`,
    `lastName`,
    `birthDate`,
    `registrationDate`,
    `ipAddress`,
    `status`,
    `email`
  )
VALUES
  (
    4,
    'last',
    'first',
    '2021-02-03 18:45:56',
    '2021-02-03 18:45:56',
    'asdsadas',
    'client',
    'demo@mail.ru'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: client_image
# ------------------------------------------------------------

INSERT INTO
  `client_image` (
    `id`,
    `filename`,
    `originalName`,
    `mime`,
    `size`,
    `clientId`
  )
VALUES
  (
    3,
    '1611118047511kamil_video.png',
    'kamil_video.png',
    'image/png',
    562168,
    1
  );
INSERT INTO
  `client_image` (
    `id`,
    `filename`,
    `originalName`,
    `mime`,
    `size`,
    `clientId`
  )
VALUES
  (
    4,
    '1611118047518bucket.png',
    'bucket.png',
    'image/png',
    158717,
    1
  );
INSERT INTO
  `client_image` (
    `id`,
    `filename`,
    `originalName`,
    `mime`,
    `size`,
    `clientId`
  )
VALUES
  (
    6,
    '1611118792686kamil_video.png',
    'kamil_video.png',
    'image/png',
    562168,
    2
  );
INSERT INTO
  `client_image` (
    `id`,
    `filename`,
    `originalName`,
    `mime`,
    `size`,
    `clientId`
  )
VALUES
  (
    7,
    '1611153376593VSTieDPluxo.jpg',
    'VSTieDPluxo.jpg',
    'image/jpeg',
    228908,
    2
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
