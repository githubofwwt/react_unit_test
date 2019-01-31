import "whatwg-fetch";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.APP_ID = "";
global.VERSION_STRING = "TESTING";
