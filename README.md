This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Setting biến môi trường cho react native trên windows với máy ảo android

1. Mở cửa sổ **Windows Control Panel.**
2. Mở phần **User Accounts**, sau đó bấm chọn **User Accounts** lần nữa
3. Bấm chọn mục: **Change my environment variables**
4. Bấm nút **New...** để tạo 1 biến môi trường là **ANDROID_HOME** ở phần **user** và trỏ tới thư mục SDK của Android.

Để xem đường dẫn thư mục android sdk thì mở phần mềm Android studio lên rồi vào setting tìm kiếm **Android SDK**
copy đường dẫn của **Android SDK Location**

Sau khi tạo Variable name **ANDROID_HOME** rồi thì thêm đường dẫn đã copy từ **Android SDK Location**
Tiếp theo thêm luôn biến môi trường cho Java đặt tên biến là **JAVA_HOME**

trong thư mục cài đặt của Android studio có thư mục [`C:\Program Files\Android\Android Studio\jre`] thư mục này chứa sẵn phiên bản java 11 phù hợp với React Native hiện tại (1/2023) nên không cần cài thêm java nhưng nếu báo lỗi đòi java 21 - 17 thì tải java 17 về link đường dẫn vào

# Thêm đường dẫn platform-tools vào biến path của hệ thống Admin

Thêm 2 đường dẫn thư mục platform và platform-tools:

- [`C:\Users\Admin\AppData\Local\Android\Sdk\platforms`]
- [`C:\Users\Admin\AppData\Local\Android\Sdk\platform-tools`]
  **AppData** bị ẩn đi nên vào **options** của view **show hidden files, folders**

# Tạo project React Native bằng CLI

Mở **terminal** và nhập lệnh sau:
Nếu trước đây bạn đã cài đặt gói **react-native-cli global**, vui lòng xóa gói đó vì nó có thể gây ra sự cố không mong muốn:

```bash
# using npm
npm uninstall -g react-native-cli @react-native-community/cli
```

Bạn có thể sử dụng **React Native Community CLI** để tạo dự án mới. Hãy tạo một dự án React Native mới:

```bash
# using npm
npx @react-native-community/cli@latest init your_project_name
```

# Lúc run app

```bash
# using npm
npm start
```

Trong lần run app đầu tiên có thể sẽ gặp lỗi về **gradle-8.10.2-all.zip** 😔
hay thoát ra chạy lệnh

```bash
npm i
```

để install thêm những phần còn thiếu chứ dạo này thấy react native nhiều lỗi quá chừng
sau đó run lại app với câu lệnh

```bash
npm run android
```

Cách khắc phục lỗi **CMake** khi tạo project mới
Sửa phiên bản [`"react-native": "0.76.0 `] // phiên bản mới là 0.76.2 hoặc 3
sau đó xoá thư mục **node_modules** đợi xoá xong thì chạy lệnh

```bash
npm i
```

để cài đặt lại **node_modules**, sau khi xong thì chạy lệnh:

```bash
npm start -- --reset-cache
```
