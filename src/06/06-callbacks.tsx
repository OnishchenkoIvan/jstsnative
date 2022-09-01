import { ChangeEvent, MouseEvent } from "react";

const callback = (): number => {
  alert("hey");
  return 12;
};

export const User = () => {
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name);
  };

  const onNameChanged = () => {
    console.log("name changed");
  };
  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("name changed: " + event.currentTarget.value);
  };

  const focusLostHandler = () => {
    console.log("focus lost");
  };
  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>
        Dimych
      </textarea>
      <input onChange={onAgeChanged} type={"number"} />
      <button name="delete" onClick={deleteUser}>
        delete
      </button>
    </div>
  );
};
