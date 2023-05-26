import mongoose, { SchemaType } from 'mongoose';

const UserSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
