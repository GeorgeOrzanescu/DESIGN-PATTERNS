interface Builder {
  // promise like usage
  then(nextFunction: (data: string) => string): Builder;
  finally(): string;
}

export class DataAnalysesBuilder implements Builder {
  private dataToAnalyse: string;

  constructor(dataToAnalyse: string) {
    this.dataToAnalyse = dataToAnalyse;
  }

  then(
    handleFunction: (
      // promise like usage
      data: string
    ) => string
  ): Builder {
    return new DataAnalysesBuilder(handleFunction(this.dataToAnalyse));
  }

  finally(): string {
    return this.dataToAnalyse;
  }
}
