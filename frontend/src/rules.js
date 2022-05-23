const rules = {
        user: {
                static: [],
        },

        admin: {
                static: [
                        "drawer-admin-items:view",
                        "tickets-manager:showall",
                        "user-modal:editProfile",
                        "user-modal:editQueues",
                        "ticket-options:deleteTicket",
                        "ticket-options:transferWhatsapp",
                        "contacts-page:deleteContact",
                        "ticket-options:transferTicket",
                        "tickets:showPending",
                        "maindrawer:notifications",
                ],
        },
        supervisor: {
                static: [
                        "user-modal:editProfile",
                        "tickets-manager:showall",
                        "ticket-options:deleteTicket",
                        "ticket-options:transferWhatsapp",
                        "contacts-page:deleteContact",
                        "ticket-options:transferTicket",
                        "tickets:showPending",
                        "maindrawer:notifications",
                ],
        },
};

export default rules;
