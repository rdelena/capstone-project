export const getComments = async () => {
  return [
    {
      id: "1",
      body: "I'm the first to Comment!",
      username: "AecirRTX32",
      userId: "1",
      parentId: null,
      createdAt: "2023-06-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "I think this is a really bad game! HAHA",
      username: "CrestFour7",
      userId: "2",
      parentId: null,
      createdAt: "2021-06-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "You cheated my guy!",
      username: "CrestFour7",
      userId: "2",
      parentId: "1",
      createdAt: "2023-06-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "This game really needs some work, but props my dude!",
      username: "CrestFour7",
      userId: "2",
      parentId: "2",
      createdAt: "2021-06-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
