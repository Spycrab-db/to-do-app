# [To-Do App](https://to-do-app-spycrab-db.vercel.app/)

## Technologies :bulb:

- React (JS framework)
- Vite (Build tool)
- Vercel (Deployment)
- ESLint (Linter)
- Prettier (Code formatter)

## Features :fire:

- **Multiple Todo Lists**: Create and manage multiple todo lists for different projects or categories.
- **Rename Lists and Tasks**: Easily rename existing lists by double clicking and rename tasks with the edit button to keep your organization neat and tidy.
- **Smooth Scrolling**: Enjoy a seamless user experience with smooth scrolling, ensuring effortless navigation through your todo items.
- **View and Undo Completed Tasks**: Keep track of completed tasks and conveniently undo any actions if needed.
- **Data Persistence (LocalStorage)**: Your data is automatically saved and persisted using LocalStorage, so you won't lose your progress even if you close the app.
- **And More Subtle Features!** :sunglasses:

## Difficult Struggles to Overcome :disappointed_relieved:

### List and Task States

**State management was a pain.** It was difficult to think of an efficient state structure that is both functional and prevents unnecessary re-renders. Ultimately, all tasks and the currently selected list were app-level states, whereas the lists are SideBar states. **Tasks hold references to the list that contains them, and lists simply act as filters.** This way, adding a task (a common event) does not alter the lists state.

### Editing Titles In-line

To give the app a more native feel, editing titles renders a form with a text input that submits on ENTER or un-focus. ESC is used to cancel the edit process. This behavior was difficult as it involved an onEdit state, validation, and various keyboard events.

### Styling (omg...)

Instant appearance or disappearance of components felt awful, because of this, **virtually everything that happens in the app involves a transition or animation of some kind.** This meant dynamically adding classes and making sure that all the transition/animation looked smooth. Not to mention styling scrollbars and responsiveness. I do regret not using CSS Modules as the styling is now difficult to understand and maintain. :sweat:
