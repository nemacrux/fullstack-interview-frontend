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
}
