export interface EventEntity {
  id?: string;
  name: string;
};

export interface State {
  entities: { [id: string]: EventEntity };
}
