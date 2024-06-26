import React from "react";
import { Button, Input, styled } from "@100mslive/roomkit-react";
import { isStreamingKit } from "../../common/utils";

const PreviewName = ({ name, onChange, onJoin, enableJoin }) => {
  const formSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={formSubmit}>
      <Input
        required
        id="name"
        css={{ w: "100%" }}
        value={name}
        onChange={e => onChange(e.target.value.trimStart())}
        placeholder="Enter your name"
        autoFocus
        autoComplete="name"
        disabled
      />
      <Button type="submit" disabled={!name || !enableJoin} onClick={onJoin}>
        {isStreamingKit() ? "Join Studio" : "Join"}
      </Button>
    </Form>
  );
};

const Form = styled("form", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$4",
  mt: "$10",
  mb: "$10",
});

export default PreviewName;
