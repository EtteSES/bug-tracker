"use client"
import { Box, Flex, Popover, Button, Avatar, TextArea } from "@radix-ui/themes";
import { ChatBubbleIcon, PersonIcon } from "@radix-ui/react-icons"
import { useSession } from "next-auth/react";
import { Skeleton } from "@/app/components";

const AddCommentPopover = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton height="2rem" width="13rem" />;
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">
          <ChatBubbleIcon width="16" height="16" />
          Add Comment
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex gap="2">
          <Avatar
            size="2"
            src={session!.user!.image!}
            fallback={<PersonIcon width="32" height="32" />}
            radius="full"
          />
          <Box grow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="2" mt="2" justify="end">
              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

export default AddCommentPopover