export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          updated_at: string | null;
          phone: string | null;
          fullname: string | null;
          address: string | null;
        };
        Insert: {
          id: string;
          updated_at?: string | null;
          phone?: string | null;
          fullname?: string | null;
          address?: string | null;
        };
        Update: {
          id?: string;
          updated_at?: string | null;
          phone?: string | null;
          fullname?: string | null;
          address?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

