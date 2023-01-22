export enum requestType {
  NORMAL = "normal",
  MALICIOUS = "malicious",
  UNKNOWN = "unknown",
}

export enum DetectorType {
  HTTP = "http",
  NETWORK = "network",
}

abstract class Detector {
  abstract analyseData(data: requestType): void;
  abstract sendResponse(): string;
}

interface IDetector extends Detector {}

class HTTPDetector implements IDetector {
  private response: string = "";

  public analyseData(data: requestType): void {
    switch (data) {
      case requestType.MALICIOUS:
        this.response = "Malicious request detected";
        break;
      case requestType.NORMAL:
        this.response = "Normal request detected";
        break;
      case requestType.UNKNOWN:
        this.response = "Unknown request detected";
        break;
    }
    console.dir(this.sendResponse());
  }

  public sendResponse(): string {
    return this.response;
  }
}

class NETWORKDetector implements IDetector {
  private response: string = "";

  public analyseData(data: requestType): void {
    switch (data) {
      case requestType.MALICIOUS:
        this.response = "Malicious network behaviour detected";
        break;
      case requestType.NORMAL:
        this.response = "Normal network behaviour detected";
        break;
      case requestType.UNKNOWN:
        this.response = "Unknown network behaviour detected";
        break;
    }
    console.dir(this.sendResponse());
  }

  public sendResponse(): string {
    return this.response;
  }
}

export class DetectorFactory {
  private detector!: IDetector;

  initialize(detectorType: DetectorType) {
    if (detectorType === DetectorType.HTTP) {
      this.detector = new HTTPDetector();
    }
    if (detectorType === DetectorType.NETWORK) {
      this.detector = new NETWORKDetector();
    }
    return this.detector;
  }
}
