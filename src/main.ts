import { DetectorFactory, DetectorType, requestType } from "./FACTORY/factory";
console.log("Hello from TS DESIGN PATTERN");

const detectorFactory = new DetectorFactory();

const HTTPDetector = detectorFactory.initialize(DetectorType.HTTP);
const NETWORKDetector = detectorFactory.initialize(DetectorType.NETWORK);

HTTPDetector.analyseData(requestType.MALICIOUS);
HTTPDetector.analyseData(requestType.UNKNOWN);
NETWORKDetector.analyseData(requestType.MALICIOUS);
NETWORKDetector.analyseData(requestType.NORMAL);
