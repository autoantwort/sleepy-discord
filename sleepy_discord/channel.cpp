#include "channel.h"

namespace SleepyDiscord {
	Channel::Channel(const std::string * rawJson) {
		//default values
		bitrate = 0;
		userLimit = 0;   //this only matters on voice channels
		topic = "";
		lastMessage_id = "";

		const char* names[] = { "id", "guild_id", "name", "type", "position", "is_private",
			"permission_overwrites", "topic", "last_message_id", "bitrate", "user_limit" };
		constexpr unsigned int arraySize = sizeof(names) / sizeof(*names);
		std::string values[arraySize];
		json::getValues(rawJson->c_str(), names, values, arraySize);
		id = values[0];
		guild_id = values[1];
		name = values[2];
		type = values[3];
		position = std::stoi(values[4]);
		isPrivate = values[5][0] == 't' ? true : false;
		//this is incomplete
		//I'll finnish later
	}

	Channel::~Channel() {

	}

	DirectMessageChannel::~DirectMessageChannel() {

	}
}