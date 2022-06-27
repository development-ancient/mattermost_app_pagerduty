export type Incident = {
    assignees: {
        html_url: string;
        id: string;
        self: string;
        summary: string;
        type: string;
    }[];
    conference_bridge: any;
    created_at: Date;
    escalation_policy: {
        html_url: string;
        id: string;
        self: string;
        summary: string;
        type: string;
    };
    html_url: string;
    id: string;
    incident_key: string;
    number: string;
    priority: any;
    resolve_reason: any;
    self: string;
    service: {
        html_url: string;
        self: string;
        summary: string;
        type: string;
    };
    status: string;
    teams: any[];
    title: string;
    type: string;
    urgency: string;
};

export type WebhookSubscription = {
    active: boolean;
    delivery_method: {
        custom_headers: any[];
        extension_id: string;
        id: string;
        secret: string;
        temporarily_disabled: boolean;
        type: string;
        url: string;
    };
    description: string;
    events: string[];
    filter: {
        id: string;
        type: string;
    }[];
    id: string;
    type: string;
};

export type WebhookEvent<T> = {
    event: {
        agent: {
            html_url: string;
            id: string;
            self: string;
            summary: string;
            type: string;
        };
        client: string;
        data: T,
        event_type: string;
        id: string;
        occurred_at: Date;
        resource_type: string;
    }
};
