import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Post from "./Post";

describe("post notes", () => {
  it("initial post notes upon start", () => {
    const postMockData = {
      firstName: "young",
      lastName: "doe",
      content: "initial post notes upon start",
    };

    render(
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <Post post={postMockData} />
        ))}
      </>
    );
    const notes = screen.getAllByTestId("postNote");
    expect(notes).toHaveLength(5);
  });
});
