/**
 * API service for making requests to the backend
 */

const API_URL = import.meta.env.VITE_API_URL || 'https://jay-prajapati-portfolio.onrender.com/api';

/**
 * Contact form submission
 */
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * API response type
 */
export interface ApiResponse {
    success: boolean;
    message: string;
}

/**
 * Send contact form data to the server
 */
export const sendContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${API_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to send message');
        }

        return data;
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                message: error.message,
            };
        }

        return {
            success: false,
            message: 'An unknown error occurred',
        };
    }
};