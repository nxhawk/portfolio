<template>
  <Card>
    <form @submit.prevent="sendEmail">
      <CardHeader>
        <CardTitle>Send me a message.</CardTitle>
        <CardDescription> Once form is submit you will be redirect to home page.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Label for="name">Name</Label>
          <Input id="name" v-model="form.name" type="text" name="name" required placeholder="Enter your name" />
        </div>
        <div class="mt-1">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="form.email"
            type="email"
            name="SenderEmail"
            required
            placeholder="Enter your email"
          />
        </div>
        <div class="mt-1">
          <Label for="message">Your Message</Label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Your message here..."
            name="message"
            required
            class="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button :disabled="isLoading" type="submit" class="w-full">
          <div v-if="isLoading" class="flex items-center gap-2">
            <Loader2 class="w-4 h-4 animate-spin" />
            Please wait
          </div>
          <div v-else>Submit</div>
        </Button>
      </CardFooter>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-vue-next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { reactive, ref } from "vue";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();
const isLoading = ref(false);

const form = reactive({
  name: "",
  message: "",
  email: "",
});
async function sendEmail() {
  const mail = useMail();
  let description = "Message submitted successfully";
  isLoading.value = true;
  try {
    await mail.send({
      from: `Contact Form ${form.email}`,
      subject: `${form.name} From Contact Form - Portfolio.`,
      text: `Sender email: ${form.email} ${form.message}`,
    });
  } catch (error) {
    console.log(error);
    description = "Something went wrong";
  }
  isLoading.value = false;

  toast({
    title: "Send message to Nguyen Nhat Hao",
    description,
  });

  await navigateTo("/");
}
</script>
