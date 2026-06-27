| Field        | Meaning                                | Required? |
| ------------ | -------------------------------------- | --------- |
| id           | database-generated exam ID             | yes       |
| courseCode   | course code, for example `BMEVIAUAC00` | yes       |
| courseName   | human-readable course name             | yes       |
| examDateTime | exam date and time                     | yes       |
| location     | exam location                          | yes       |
| faculty      | faculty/source group                   | yes       |
| sourceUrl    | optional source page                   | no        |


For the MVP, exam date/time is treated as local university time. Since the project currently targets Hungary/Budapest, this means Europe/Budapest time.