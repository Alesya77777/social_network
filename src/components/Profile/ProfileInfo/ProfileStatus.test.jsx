import { create } from "react-test-renderer"
import { propTypes } from "redux-form";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Kyzya" />);
    const instanse = component.getInstance();
    expect(instanse.state.status).toBe("Kyzya");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Kyzya" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Kyzya" />);
    const root = component.root;

    expect(() => {
      root.findByType("input");
    }).toThrow();
  });
});

test("after creation <span> should contains correct status", () => {
  const component = create(<ProfileStatus status="Kyzya" />);
  const root = component.root;
  const span = root.findByType("span");
  expect(span.children[0]).toBe("Kyzya");
});

test("input should be displayed in editMode instead span", () => {
  const component = create(<ProfileStatus status="Kyzya" />);
  const root = component.root;
  const span = root.findByType("span");
  span.props.onDoubleClick();
  const input = root.findByType("input");
  expect(input.props.value).toBe("Kyzya");
});

test("callback should be called", () => {
  const mockCallback = jest.fn();
  const component = create(<ProfileStatus status="Kyzya" updateUserStatus={mockCallback} />);
  const instance = component.getInstance();
  instance.deactivateEditMode();
  expect(mockCallback.mock.calls.length).toBe(1);
});


