"use client";

type ApiConfig = {
    category: string,
    profession: string,
    companyType: string,
    socialMedia: string,
    jobType: string,
    skills: string,
    workLocation: string,
    educationLevel: string,
    experienceLevel: string,
}

const apiConfig: ApiConfig = {
    category: "https://retoolapi.dev/Pgomdn/category",
    profession: "https://retoolapi.dev/blNZdv/profession",
    companyType: "https://retoolapi.dev/Lwdufz/companyType",
    socialMedia: "https://retoolapi.dev/MIObfd/socialMedia",
    jobType: "https://retoolapi.dev/UW8iqb/jobType",
    skills: "https://retoolapi.dev/HLrIcS/skills",
    workLocation: "https://retoolapi.dev/sm4oW9/workLocation",
    educationLevel: "https://retoolapi.dev/XrNqT3/educationLevel",
    experienceLevel: "https://retoolapi.dev/nds3hV/experienceLevel",
};

type Resource = keyof ApiConfig;

interface ApiClient {
    getAll: (resource: Resource) => Promise<any>;
    getOne: (resource: Resource, id: string | number) => Promise<any>;
    get: (resource: Resource) => Promise<any>;
    post: (resource: Resource, data: any) => Promise<any>;
    update: (resource: Resource, id: string | number, data: any) => Promise<any>;
    delete: (resource: Resource, id: string | number) => Promise<any>;
}

export const apiClient : ApiClient = {
    getAll: async (resource) => {
        if (!apiConfig[resource]) {
            throw new Error(`Unknown resource: ${resource}`);
        }
        const response = await fetch(apiConfig[resource]);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${resource}s`);
        }
        return response.json();
    },

    getOne: async (resource, id) => {
        if (!apiConfig[resource]) {
            throw new Error(`Unknown resource: ${resource}`);
        }
        const response = await fetch(`${apiConfig[resource]}/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${resource} with id ${id}`);
        }
        return response.json();
    },

    get: async (resource) => {
        if (!apiConfig[resource]) {
            throw new Error(`Unknown resource: ${resource}`);
        }
        const url = apiConfig[resource];
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${resource}`);
        }
        return response.json();
    },
    post: async (resource, data) => {
        if (!apiConfig[resource]) {
            throw new Error(`Unknown resource: ${resource}`);
        }
        const response = await fetch(apiConfig[resource], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Failed to create ${resource}`);
        }
        return response.json();
    },

    update: async (resource, id, data) => {
        if (!apiConfig[resource]) {
            throw new Error(`Unknown resource: ${resource}`);
        }
        const response = await fetch(`${apiConfig[resource]}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Failed to update ${resource} with id ${id}`);
        }
        return response.json();
    },

    delete: async (resource, id) => {
        if (!apiConfig[resource]) {
            throw new Error(`Unknown resource: ${resource}`);
        }
        const response = await fetch(`${apiConfig[resource]}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Failed to delete ${resource} with id ${id}`);
        }
        return response.json();
    },
};