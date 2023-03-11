import * as notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;
  const selectedNotifications = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      selectedNotifications.push(messages[notifications[property].context]);
    }
  }

  return selectedNotifications;
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