export enum DBTables {
  TEST_OBJECTS = "test_objects",
}

export type DBTestObjectSchema = {
  id: number;
  name: string;
  description: string;
};
