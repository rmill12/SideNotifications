# SideNotifications
Display side notification alerts on a web application

Simply add the js and css file to your project.

Create a notification by writing JavaScript code. The following will create 3 notifications!

$(function () {
  let _SideNotificationVM = new SideNotificationViewModel();
  let settings = new _SideNotificationVM.NotificationSettings("<i class='fa fa-bell-o'></i>", "Notification Here...", "");
  _SideNotificationVM.addTypeA(settings);

  settings.Value = "5";
  settings.Description = "Next notification!";
  _SideNotificationVM.addTypeB(settings);

  settings.Value = "<i class='fa fa-bell-o'></i>";
  settings.Description = "Third notification!";
  _SideNotificationVM.addTypeC(settings);
});
