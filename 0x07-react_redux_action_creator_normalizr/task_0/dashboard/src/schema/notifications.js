import * as notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const selectedNotifications = notifications.default.filter((notif) => notif.author.Id === userId);
  return selectedNotifications.map((notif => notif.context));

}
