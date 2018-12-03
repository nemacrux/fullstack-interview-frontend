export class Topic {
  constructor(
    private id: number,
    private name: string,
    private description: string,
    private createdAt?: Date,
    private updatedAt?: Date
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  static fromJson(object: any): Topic {
    return new Topic(
      object.id,
      object.name,
      object.description,
      new Date(object.createdAt),
      new Date(object.updatedAt)
    );
  }

  static fromJsonArray(objectArray: any[]): Topic[] {
    return objectArray.map((element) => Topic.fromJson(element));
  }
}
