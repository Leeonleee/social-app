import { supabase } from "@/lib/supabase";

interface UserDataResponse {
    success: boolean;
    data?: any;
    error?: string;
    msg?: string;
}

export const getUserData = async (userId: string): Promise<UserDataResponse> => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('id', userId)
            .single();
            if (error) {
                return {success: false, error: error?.message}
            }
            return {success: true, data}
    } catch (error: any) {
        console.log('got error: ', error);
        return {
            success: false,
            msg: error.message}
    }
}