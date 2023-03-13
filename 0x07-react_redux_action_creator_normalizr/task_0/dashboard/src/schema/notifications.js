import * as notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const selectedNotifications = notifications.default.filter((notif) => notif.author.id === userId);
  return selectedNotifications.map((notif => notif.context));
}