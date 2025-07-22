import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      throw error; // Re-throw the error so the calling component knows it failed
    });
};

// used in auth login component
export const loginUser = (currUser) => {
  console.log("Login attempt for:", currUser.email);
  return Parse.User.logIn(currUser.email, currUser.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      throw error; // Re-throw the error so the calling component knows it failed
    });
};

export const logoutUser = (currUser) => {
//  return Parse.User.logOut(currUser.email);
    return Parse.User.logOut();
};

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

export const getUser = () => {
    return Parse.User.current();
  };

// used in auth login component
export const changePassword = (currUser) => {
  return Parse.User.requestPasswordReset(currUser.email)
    .then(() => {
      return true; // Indicate success
    })
    .catch((error) => {
      throw error; // Re-throw the error so the calling component knows it failed
    });
};

