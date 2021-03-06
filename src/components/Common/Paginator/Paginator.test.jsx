import { create } from "react-test-renderer";
import Paginator from "./Paginator";


describe("Paginator component test", () => {

  test("pages count is 11 should be showed only 10", () => {
    const component = create(<Paginator totalItemsCount = {11} pageSize={1} portionSize={5} />);
    const root = component.root;
    const button = root.findAllByType("button");
    expect(button.length).toBe(6);
  });

  test("if pages count is more then 10 button NEXT should be present", () => {
    const component = create(<Paginator totalItemsCount = {11} pageSize={1} portionSize={5} />);
    const root = component.root;
    const button = root.findAllByType("button");
    expect(button.length).toBe(6);
  });


});
