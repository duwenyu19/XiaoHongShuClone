# XiaoHongShuClone

[XiaoHongShuClone Simulator Demo](https://drive.google.com/drive/folders/1PFJBzeVxJfEIu_y50pnB4NOLfzCTwwW6?usp=sharing)

## Steps to start the application:

1. Please have Xcode installed together with the newest simulator for IOS.
2. Inside the terminal, `cd` to `XiaoHongShuClone` repo directory.
3. Run command line: `npx react-native run-ios`.
4. Wait for Metro to boot up, the simulator will pop up, and the application will start running.

## How to navigate within the application:

1. The main navigator is the bottom tab navigator, containing a **Home page** and a **Me page**.
2. The default ‘index’ page is the **Explore page** in the Home page, nested within a top tab navigator inside the Home page.
3. Together with the Explore page, there is the **Follow page** and the **Nearby page**, all handled by the top tab navigator inside the Home page.
4. In the Explore page, you will find a list of User post thumbnails. Once clicked, it will navigate to the user post detail page (UserPostGeneral), displaying key information (I put the flat list logic inside user post thumbnail component).
5. Same navigation logic is applied to the Follow page, with the difference of showing posts coming from the user that the current user is following (The detailed data is hard coded in the file usersDataPostFollowing, same users compared to the usersDataFollowing but with more properties).
6. The Nearby page was only added to the navigator without any content.
7. Click on the Me tab in the bottom tab navigator will navigate us to the Me page.
8. This page shows the details about the current user. Username, Bio, and Gender are at their default value.
9. Click on the Following button will navigate us to a list of users’ simplified name tags showing key information.
10. The top search bar enables us to filter out users by searching key characters in their usernames.
11. Click on the name tag will navigate to user detail page.
12. The Followers page has the same product logic with the Following page.
13. The Likes & Col page and the Settings page are only added to the Me page navigator, with no meaningful content.
14. There is a top tab navigator embedded within the Me page, showing four tabs, Posts, Tag, Collects, and Likes. Tag, Collects, and Likes pages are only added to the navigation logic. The Posts tab shows a list of current users’ posts.
15. Click on the posts will navigate again to the user post detail page.
16. The Edit Profile button will navigate us to a page where we could change the user profile information.
17. Feel free to change anything you like. Be noted that if you change the Username, Bio, and Gender, the changes will be applied to the Me page as well as the post thumbnails in the Posts tab. Enjoy the app^^.

## Progress Overview:

1. I started off with creating the framework for the navigation logic for both the Home page and the Me page, to have a bottom tab navigator as the main navigator that holds the Home and Me page.
2. Since both Home and Me pages will have many other pages to handle, they both need a stack navigator to handle all the pages. These two navigators are the HomeNavigator and the MeNavigator.
3. Then I started to create all the necessary pages for the Me page and put them as simple buttons. The main focus was to complete the navigation logic first. So I put all the pages in the MeScreens folder for the MeNavigators to handle. The same for the Home pages, but for now, there are only three tabs for the Home page.
4. Added a top tab navigation bar for the Home page and put Explore as the default index page. Then I started to focus on the Me page logics and contents.
5. Modified the layout of the Me page to look like the targeted app’s Me page layout. Added another top tab navigator to the Me page. The buttons that contain a repetitive pattern are extracted out as customized components.
6. Started adding content to the Following and Followers page. Added dummy data to be displayed. Added UserProfileGeneral page to read and display detailed information.
7. Encountered an issue of only showing Following users’ data no matter visited from Following or Followers page. Added a source prop to identify which page it was navigated from.
8. Encountered issues with the stack navigator. Resolved by adding another stack navigator for the Following and Followers page. Nested their navigators into the MeNavigator.
9. Added a UserContext to resolve the issue of the number of Following and Followers buttons not refreshing when adding new user data.
10. Moving on to the Home page, I decided to make a post feature that displays post thumbnails in the Explore and Follow page. Added UserPostGeneral page to display post details, with a source prop to decide to read data from Follow or Explore. Added the UserPostGeneral to be handled by the HomeNavigator. Added another source from the Me page so the UserPostGeneral will display thumbnails of the current user’s posts.
11. Finally, to complete the functionality for the EditProfile page, Redux was introduced to store the input data. Encountered an issue with the Me page not able to re-render when there’s a change in user information in the EditProfile page. Tried userFocusEffect but ended up with an infinite loop. Resolved by using useIsFocused from react navigation.
12. Encountered a problem with the format of the previously created dummy data. Upon changing the user’s Username in the EditProfile page, the Username on the Post thumbnail showing in the Posts tab will not change since the data was hard coded. Resolved by adding the data file and thumbnail component as the edit profile reducer’s listener. It will change the username inside the dummy data object once there is a state change from the EditProfile page.

## Potential Issue and possible improvement:

1. Prettier and ESLint conflict.
2. Swiping gesture with no listeners for reanimation.
3. Tab bar indicator default motion is not very smooth. Tried to make the indicator appear directly below the focus tab by calculating the relative position, but the calculation delays the animation. I ended up using the default sliding animation, but if I jump from the leftmost tab to the rightmost tab, the sliding animation is off.
4. No length restriction for user input.
5. Residual dummy data structure that led to unnecessary complexity of code in the later stage.
6. Did not extract Edit Profile state as a Redux slice, leading to overly complexed listener-action logic.
