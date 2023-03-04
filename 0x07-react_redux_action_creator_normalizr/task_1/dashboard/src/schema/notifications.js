import * as notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const selectedNotifications = notifications.default.filter((notif) => notif.author.id === userId);
  return selectedNotifications.map((notif => notif.context));
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedNotifications = normalize(notifications.default, [notification]);