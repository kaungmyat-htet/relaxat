let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: "Jan",
        extendedProps: {
            description: ["Haircut"],
        },
        start: todayStr + "T10:00:00",
        end: todayStr + "T11:00:00",
    },
];

export function createEventId() {
    return String(eventGuid++);
}
