const ChatSidebar = () => {
  return (
    <ul className="daisy-menu p-4 w-80 bg-base-200 text-base-content overflow-y-auto">
      {Array.from(Array(50)).map((_, index) => (
        <li key={index.toString()}>
          <a>Sidebar Item {index}</a>
        </li>
      ))}
    </ul>
  );
};

export default ChatSidebar;
