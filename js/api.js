export const fetchUserListFromServer = async () => {
  try {
    const res = await fetch(
      "https://blackcoffee-todolist.df.r.appspot.com/api/u",
      {
        method: "GET",
      }
    );
    const userList = await res.json();
    return userList;
  } catch (e) {
    return [];
    console.error(e);
  }
};

const request = (url, option) => {
  try {
  } catch (error) {}
};

const options = {
  POST: (text) => {
    return {
      method: "POST",
      headers: "",
    };
  },
};